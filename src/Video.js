import React from 'react';
import './App.css';

function video() {
    return (
        <div style={{ backgroundColor: "#f2f2f2" }}>
            <br />
            <div class="container">
                <iframe class="responsive-iframe" src="https://www.youtube.com/embed/hqvGOPB0KmQ" title="video"></iframe>
            </div>
            <br />
        </div>
    );
}

export default video;

