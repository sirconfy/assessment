
const CircularLoader = () => {
  return (
    <div className="loader">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          className="dot"
          key={i}
          style={{
            transform: `rotate(${i * 45}deg) translate(30px)`
          }}
        ></div>
      ))}
    </div>
  );
};

export default CircularLoader;
