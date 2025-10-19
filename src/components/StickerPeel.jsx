// ...import 동일
export default function StickerPeel({
  size = 40,
  maxPeel = 60,
  className = "",
}) {
  const rootRef = useRef(null);
  const dragRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current,
      drag = dragRef.current;
    if (!root || !drag) return;
    gsap.set(drag, { x: 0, y: 0, rotation: 0 });
    root.style.setProperty("--size", `${size}px`);
    root.style.setProperty("--peel", `0%`);
    const maxDist = Math.max(120, size * 1.6);

    gsap.registerPlugin(Draggable);
    Draggable.create(drag, {
      type: "x,y",
      bounds: root,
      inertia: true,
      onPress() {
        this._sx = this.x;
        this._sy = this.y;
      },
      onDrag() {
        const rot = gsap.utils.clamp(-24, 24, this.deltaX * 0.4);
        gsap.to(drag, { rotation: rot, duration: 0.12, ease: "power1.out" });
        const dx = this.x - (this._sx ?? 0),
          dy = this.y - (this._sy ?? 0);
        const peel = gsap.utils.clamp(
          0,
          maxPeel,
          (Math.hypot(dx, dy) / Math.max(120, size * 1.6)) * maxPeel
        );
        root.style.setProperty("--peel", `${peel}%`);
      },
      onRelease() {
        gsap.to(drag, { rotation: 0, duration: 0.5, ease: "power2.out" });
        gsap.to(root, { "--peel": "0%", duration: 0.35, ease: "power2.out" });
      },
    });

    return () => Draggable.get(drag)?.kill();
  }, [size, maxPeel]);

  return (
    <span ref={rootRef} className={`hj-sticker ${className}`}>
      <span ref={dragRef} className="hj-drag">
        <span className="hj-core">
          {/* ⬇︎ 원형 마스크: 앞면(오렌지+HJ.)은 여기 안에만 보임 */}
          <span className="hj-mask">
            <span className="hj-fill" />
            <span className="hj-label" aria-hidden="true">
              <span className="hj-letters">HJ</span>
              <span className="hj-dot" />
            </span>
          </span>

          {/* ⬇︎ 접힘 레이어는 마스크 밖(겹쳐서 보임) */}
          <span className="hj-peel-flat" />
          <span className="hj-peel-curve" />
          <span className="hj-peel-contact" />
          <span className="hj-rim" />
        </span>
      </span>

      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <filter id="hjDropShadow">
            <feDropShadow
              dx="2"
              dy="4"
              stdDeviation="2.5"
              floodColor="black"
              floodOpacity="0.25"
            />
          </filter>
        </defs>
      </svg>
    </span>
  );
}
