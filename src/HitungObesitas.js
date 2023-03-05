import React, { useState } from "react";
import "./HitungObesitas.css";

function HitungObesitas() {
  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [usia, setUsia] = useState("");
  const [kelamin, setKelamin] = useState("");
  const [lingkarPinggang, setLingkarPinggang] = useState("");
  const [hasil, setHasil] = useState("");

  const hitungBMI = (event) => {
    event.preventDefault();

    const tinggiMeter = tinggi / 100;
    const bmi = berat / (tinggiMeter * tinggiMeter);
    let statusObesitas = "";

    if (kelamin === "Laki-laki") {
      if (lingkarPinggang < 90) {
        if (bmi < 18.5) {
          statusObesitas = "Kurus";
        } else if (bmi >= 18.5 && bmi < 25) {
          statusObesitas = "Normal";
        } else if (bmi >= 25 && bmi < 30) {
          statusObesitas = "Gemuk";
        } else {
          statusObesitas = "Obesitas";
        }
      } else {
        if (bmi < 23) {
          statusObesitas = "Kurus";
        } else if (bmi >= 23 && bmi < 27) {
          statusObesitas = "Normal";
        } else if (bmi >= 27 && bmi < 30) {
          statusObesitas = "Gemuk";
        } else {
          statusObesitas = "Obesitas";
        }
      }
    } else if (kelamin === "Perempuan") {
      if (lingkarPinggang < 80) {
        if (bmi < 18.5) {
          statusObesitas = "Kurus";
        } else if (bmi >= 18.5 && bmi < 25) {
          statusObesitas = "Normal";
        } else if (bmi >= 25 && bmi < 30) {
          statusObesitas = "Gemuk";
        } else {
          statusObesitas = "Obesitas";
        }
      } else {
        if (bmi < 23) {
          statusObesitas = "Kurus";
        } else if (bmi >= 23 && bmi < 27) {
          statusObesitas = "Normal";
        } else if (bmi >= 27 && bmi < 30) {
          statusObesitas = "Gemuk";
        } else {
          statusObesitas = "Obesitas";
        }
      }
    }

    setHasil(statusObesitas);
  };

  return (
    <div className="container">
      <h1>Hitung Indeks Massa Tubuh (BMI)</h1>
      <form onSubmit={hitungBMI}>
        <label>
          Berat Badan (kg):
          <input type="number" value={berat} onChange={(e) => setBerat(e.target.value)} />
        </label>
        <label>
          Tinggi Badan (cm):
          <input type="number" value={tinggi} onChange={(e) => setTinggi(e.target.value)} />
        </label>
        <label>
          Usia (tahun):
      <input type="number" value={usia} onChange={(e) => setUsia(e.target.value)} />
    </label>
    <label>
      Jenis Kelamin:
      <select value={kelamin} onChange={(e) => setKelamin(e.target.value)}>
        <option value="">Pilih Jenis Kelamin</option>
        <option value="Laki-laki">Laki-laki</option>
        <option value="Perempuan">Perempuan</option>
      </select>
    </label>
    <label>
      Lingkar Pinggang (cm):
      <input type="number" value={lingkarPinggang} onChange={(e) => setLingkarPinggang(e.target.value)} />
    </label>
    <button type="submit">Hitung</button>
  </form>
  {hasil && (
    <div className="hasil">
      <p>Hasil:</p>
      <h2 className={hasil === "Obesitas" ? "obesitas" : ""}>{hasil}</h2>
    </div>
  )}
</div>

);
}
export default HitungObesitas;