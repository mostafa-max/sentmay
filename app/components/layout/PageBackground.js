export const PageBackground = () => {
  return (
    <div className="fixed  bg-gradient-to-br from-base-100 to-base-200  inset-0 z-0">
      <div
        className="absolute inset-0 bg-cover  opacity-35"
        style={{
          WebkitMaskImage: `url('/patterns/masjed.svg')`,
          maskImage: `url('/patterns/masjed.svg')`,
          // backgroundColor: "var(--error)"
          backgroundColor: "var(--background-svg-color)",
        }}
      ></div>
      {/* Vintage Fading Effect (Smaller & Themed) */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-r opacity-50 mix-blend-multiply"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,.4), transparent 10%, transparent 90%,  rgba(0,0,0,.4))",
            
          }}
        />
      </div>
    </div>
  );
};
