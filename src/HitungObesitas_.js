import React, { useState } from "react";
import "./HitungObesitas.css";


function HitungObesitas() {
  const [tinggiBadan, setTinggiBadan] = useState("");
  const [beratBadan, setBeratBadan] = useState("");
  const [usia, setUsia] = useState(""); // Tambahkan state untuk usia
  const [hasil, setHasil] = useState(0);

  function hitungBMI() {
    const tinggiMeter = tinggiBadan / 100;
    const bmi = beratBadan / (tinggiMeter * tinggiMeter);
    const faktorUsia = usia < 30 ? -0.5 : 0.5; // Tambahkan faktor usia
    const hasilBMI = bmi + faktorUsia; // Hitung BMI dengan memperhitungkan faktor usia
  
    setHasil(hasilBMI.toFixed(2));
  }
  

  return (
    <div className="container">
    <h1>Hitung Indeks Massa Tubuh (BMI)</h1>
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="tinggiBadan">Tinggi Badan (cm)</label>
      <input
        type="number"
        id="tinggiBadan"
        name="tinggiBadan"
        value={tinggiBadan}
        onChange={(e) => setTinggiBadan(e.target.value)}
      />
  
      <label htmlFor="beratBadan">Berat Badan (kg)</label>
      <input
        type="number"
        id="beratBadan"
        name="beratBadan"
        value={beratBadan}
        onChange={(e) => setBeratBadan(e.target.value)}
      />
  
      <label htmlFor="usia">Usia (tahun)</label>
      <input
        type="number"
        id="usia"
        name="usia"
        value={usia}
        onChange={(e) => setUsia(e.target.value)}
      />
  
      <button onClick={hitungBMI}>Hitung BMI</button>
  
      {hasil > 0 && (
        <div className="hasil">
        <p>BMI Anda: {hasil}</p>
        {hasil < 18.5 && <p>Anda Kurus</p>}
        {hasil >= 18.5 && hasil < 25 && <p>Anda Normal</p>}
        {hasil >= 25 && hasil < 30 && <p>Anda Gemuk</p>}
        {hasil >= 30 && <p className="obesitas">Anda Obesitas</p>}

        </div>
        )}
        
          </form>
        </div>
  );
}

export default HitungObesitas;
