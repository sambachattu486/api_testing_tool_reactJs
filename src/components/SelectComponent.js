import React, { useState, useEffect } from "react";
import axios from "axios";
import "./postman.css"; // Make sure to replace with your actual CSS file
import Home from './Home';

const DropdownButton = () => {
  const [selectedValue, setSelctedValue] = useState('');
  const [url, setUrl] = useState('');
  const [headers, setHeaders] = useState('');
  const [requestBody, setRequestBody] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(null);
  const [responseSize, setResponseSize] = useState(null);


  const handleDropDownChange = (e) => {
    setSelctedValue(e.target.value);
  };

  const urlHandler = (e) => {
    setUrl(e.target.value);
  };

  const headersHandler = (e) => {
    setHeaders(e.target.value);
  };

  const requestBodyHandler = (e) => {
    setRequestBody(e.target.value);
  };

  const sendRequest = async () => {
    try {
      setLoading(true);
      const startTime = performance.now();
      
      if (!url) {
        setError('URL cannot be empty');
        return;
      }
      const headersObject = headers ? JSON.parse(headers) : {};
      const requestBodyObject = requestBody ? JSON.parse(requestBody) : null;

      const requestData = {
        method: selectedValue,
        url: url,
        headers: headersObject,
        data: requestBodyObject,
      };
      setError(null)
      const response = await axios(requestData);

      const endTime = performance.now();
      const elapsedMilliseconds = endTime - startTime;
      const elapsedSeconds = (elapsedMilliseconds).toFixed(2);

      setStatus(response.status);
      setElapsedTime(elapsedSeconds);
      setResponseSize((JSON.stringify(response.data).length / 1024).toFixed(2));
      setData(response.data);
    } catch (error) {
      setError(error.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const clearData = () => {
    setData(null);
    setError(null);
    setStatus(null);
    setElapsedTime(null);
    setResponseSize(null);
  };

  return (
    <div className="postman-container">
      <div className="postman-inputs">
        <select id="dropdown" value={selectedValue} onChange={handleDropDownChange}>
          <option value="get">GET</option>
          <option value='post'>POST</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
        </select>
        <input type='text' value={url} onChange={urlHandler} placeholder="Enter URL"/>
        <button onClick={sendRequest}>Send</button>
        <button onClick={clearData}>Clear</button>
        <textarea value={headers} onChange={headersHandler} placeholder="Enter Headers (JSON format)"/>
        <br></br>
        <textarea value={requestBody} onChange={requestBodyHandler} placeholder="Enter Request Body (JSON format)"/>
      </div>

      <div className="postman-results">
        {loading && <p>Loading......</p>}
        {error && <p className="postman-error">{error}</p>}
        {data && (
          <div>
            <pre id="metaData">
              Status Code: <span style={{ color: 'green' }}>{status}</span>
              {'        '}
              Elapsed Time: <span style={{ color: 'green' }}>{elapsedTime} ms</span>
              {'        '}
              Response Size: <span style={{ color: 'green' }}>{responseSize} KB</span>
            </pre>
            <pre id="pretag">{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownButton;
