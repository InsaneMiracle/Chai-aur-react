import React, { useEffect, useState } from "react";

export default function Teacher() {
    const [teacher, setteacher] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:1337/api/teachers`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data.data);
                let newarray = data.data.map((cv, idx, array) => {
                    return {
                        id: cv.id,
                        name: cv.name,
                        createdAt: cv.createdAt
                    }
                });
                setteacher(newarray);


            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <div className="container">
                <h1>Teacher Page</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="tname" className="form-label">Teacher Name</label>
                        <input type="text" className="form-control" id="tname" aria-describedby="emailHelp" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <hr />
                <br />
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">CreatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teacher.map((cv, idx, arry) => {
                                return (
                                    <tr key={idx}>
                                        <th scope="row">{cv.id}</th>
                                        <td>{cv.name}</td>
                                        <td>{cv.createdAt}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}