function App() {
  const products = [
    {
      title: "MILO ACTIV-GO Minuman Cokelat Berenergi Pouch 790g - NEB4K18",
      price: "Rp89.775",
      img: "https://images.tokopedia.net/img/cache/900/aphluv/1997/1/1/0ec3bc1ff1764f3bbb035afc05f4c238~.jpeg",
      link: "https://tk.tokopedia.com/ZSSSmbg5v/"
    },
    {
      title: "Keripik Singkong Chuba Balado Dan Keju 250 Gram - Balado",
      price: "Rp15.675",
      img: "https://images.tokopedia.net/img/cache/900/aphluv/1997/1/1/789c1ddac87248a0802e352e620bc48f~.jpeg",
      link: "https://tk.tokopedia.com/ZSSSHoSma/"
    },
    {
      title: "COD Soes Coklat Cokelat",
      price: "Rp31.350",
      img: "https://images.tokopedia.net/img/cache/500-square/aphluv/1997/1/1/e960552df8dd4b41a9670508e0e5e250~.jpeg.webp?ect=4g",
      link: "https://tk.tokopedia.com/ZSSS9Ja7V/"
    },
  ];

  return (
    <div style={{
      width: "600px", height: "120px", overflow: "hidden",
      fontFamily: "sans-serif", borderRadius: "10px", background: "#fff"
    }}>
      <div className="carousel-track" style={{
        display: "flex",
        transform: "translateX(0%)",
        transition: "transform 0.5s ease-in-out",
        animation: "slide 8s infinite"
      }}>
        {products.map((p, i) => (
          <div key={i} style={{
            flex: "0 0 100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "10px"
          }}>
            {/* Gambar Kiri */}
            <a href={p.link} target="_blank">
              <img src={p.img} alt={p.title} style={{
                width: 90, height: 90, objectFit: "cover", borderRadius: "8px", marginRight: "15px"
              }} />
            </a>

            {/* Teks Kanan */}
            <div style={{ flex: 1 }}>
              <div style={{
                fontWeight: "bold", fontSize: "16px", lineHeight: "1.3", marginBottom: "5px"
              }}>{p.title}</div>
              <div style={{ color: "green", fontWeight: "500" }}>{p.price}</div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes slide {
          0%   { transform: translateX(0%); }
          50%  { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </div>
  );
}

export default App;
