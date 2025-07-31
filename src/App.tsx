function App() {
  const products = [
    {
      title: "Headset Gaming XYZ",
      price: "Rp150.000",
      img: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/07/31/sample1.jpg",
      link: "https://tokopedia.link/affiliate1234"
    },
    {
      title: "Keyboard Mechanical ABC",
      price: "Rp350.000",
      img: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/07/31/sample2.jpg",
      link: "https://tokopedia.link/affiliate5678"
    },
    {
      title: "Mouse Gaming Ultra",
      price: "Rp250.000",
      img: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/07/31/sample3.jpg",
      link: "https://tokopedia.link/affiliate91011"
    },
  ];

  return (
    <div style={{
      width: "600px", height: "200px", overflow: "hidden",
      fontFamily: "sans-serif", borderRadius: "10px"
    }}>
      <div className="carousel-track" style={{
        display: "flex",
        transform: "translateX(0%)",
        transition: "transform 0.5s ease-in-out",
        animation: "slide 12s infinite"
      }}>
        {products.map((p, i) => (
          <div key={i} style={{
            flex: "0 0 100%", padding: "10px", background: "#fff", textAlign: "center"
          }}>
            <a href={p.link} target="_blank">
              <img src={p.img} alt={p.title} style={{ maxWidth: 100, maxHeight: 100 }} />
              <div style={{ fontWeight: "bold", fontSize: 16 }}>{p.title}</div>
              <div style={{ color: "green", marginTop: 5 }}>{p.price}</div>
            </a>
          </div>
        ))}
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes slide {
          0%   { transform: translateX(0%); }
          33%  { transform: translateX(-100%); }
          66%  { transform: translateX(-200%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
}

export default App;
