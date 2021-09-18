import React, { useState } from "react";

function TaxCollection() {
  const [data, setData] = useState({
    Basic: "",
    LTA: "",
    HRA: "",
    Food: "",
    Inv: "",
    Rent: "",
    Policy: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const Calculation = () => {
    const City = document.getElementById("List").value;
    if (City === "Metro") {
      const CalculatedValue =
        Number(0.5 * data.Basic) + Number(0.1 * data.Basic) + Number(data.HRA);
      document.getElementById("output").value = CalculatedValue;
    } else {
      const CalculatedValue =
        Number(0.4 * data.Basic) + Number(0.1 * data.Basic) + Number(data.HRA);
      document.getElementById("output").value = CalculatedValue;
    }
  };

  const IncTax = () => {
    const AppHRA = document.getElementById("output").value;
    const Tax =
      Number(data.Basic) +
      Number(data.LTA) +
      Number(data.HRA) +
      Number(data.Food) -
      AppHRA -
      Number(data.Inv) -
      Number(data.Policy);
    console.log(Tax);

    window.alert("You Income Tax Is TaxInc = " + Tax);
  };

  const showContent = () => {
    const Data =
      "Basic = " +
      data.Basic +
      "\n" +
      "LTA = " +
      data.LTA +
      "\n" +
      "HRA = " +
      data.HRA +
      "\n" +
      "Food = " +
      data.Food +
      "\n" +
      "Investment = " +
      data.Inv +
      "\n" +
      "Rent = " +
      data.Rent +
      "\n" +
      "Policy = " +
      data.Policy +
      "\n" +
      "City Type = " +
      document.getElementById("List").value;

    window.alert(Data);
    const City = document.getElementById("List").value;
    const AppHRA = document.getElementById("output").value;
    const Basic = data.Basic;
    const LTA = data.LTA;
    const HRA = data.HRA;
    const Food = data.Food;
    const Inv = data.Inv;
    const Rent = data.Rent;
    const Policy = data.Policy;
    const taxInfo = { Basic, LTA, HRA, Food, Inv, Rent, Policy, City, AppHRA };

    fetch("http://localhost:8000/taxdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taxInfo),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div style={{ backgroundColor: "white", height: "100vh" }}>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h1> Tax Calculator</h1>
        </div>
        <div style={{ marginTop: "1%" }}>
          <p style={{ textAlign: "center" }}>
            Please Enter The Details Listed Below
          </p>
          <form style={{ marginLeft: "32%", marginRight: "32%" }}>
            <div className="mb-3">
              <label className="form-label">Basic</label>
              <input
                type="number"
                className="form-control form-control-sm"
                name="Basic"
                value={data.Basic}
                onChange={handleChange}
                autoFocus="On"
                required
              />
            </div>
            <div>
              <label className="form-label">LTA</label>
              <input
                type="Number"
                className="form-control form-control-sm"
                name="LTA"
                value={data.LTA}
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <label className="form-label">HRA</label>
              <input
                type="number"
                className="form-control form-control-sm"
                name="HRA"
                value={data.HRA}
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <label className="form-label">Food</label>
              <input
                type="number"
                className="form-control form-control-sm"
                name="Food"
                value={data.Food}
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              <label className="form-label">Investment</label>
              <input
                type="number"
                className="form-control form-control-sm"
                name="Inv"
                value={data.Inv}
                onChange={handleChange}
                placeholder=" Inv Under Section 80C"
              />
            </div>
            <div className="mt-3">
              <label className="form-label">Rent</label>
              <input
                type="number"
                className="form-control form-control-sm"
                name="Rent"
                value={data.Rent}
                onChange={handleChange}
                placeholder="Actual Rent Paid By User"
              />
            </div>
            <div className="mt-3">
              <label className="form-label">Policy</label>
              <input
                type="number"
                className="form-control form-control-sm"
                name="Policy"
                value={data.Policy}
                onChange={handleChange}
                placeholder="Medi-Claim Policy Paid By User"
              />
            </div>
            <label className="form-label mt-3">City Type</label>
            <select
              id="List"
              onChange={Calculation}
              className="form-select form-select-sm "
              aria-label="Default select example"
            >
              <option>Select</option>
              <option value="Metro">Metro City</option>
              <option value="Non-Metro">Non-Metro City</option>
            </select>
            <hr className="mt-3"></hr>
            <div className="mt-3">
              <label className="form-label">Applicable HRA</label>
              <input
                id="output"
                type="number"
                className="form-control form-control-sm"
                name="End"
                placeholder="Applicable HRA"
                disabled
              />
            </div>
            <p className="mt-2">
              Press Confirm To Show Data in Pop-up Window and To Push Data Into
              Database
            </p>
            <p>Press Submit To Calculate Income Tax </p>
            <button
              className="btn btn-primary"
              type="button"
              onClick={showContent}
            >
              Confirm
            </button>
            <button
              className="btn btn-success m-2 "
              type="submit"
              onClick={IncTax}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default TaxCollection;
