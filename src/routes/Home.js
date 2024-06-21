import React, { useEffect, useState } from 'react';

function generateBinary(length) {
    const output = [];
    for (let i = 0; i < length; i++) {
        output.push(Math.round(Math.random()));
    }
    return output;
}

function generateSpace(length) {
    const output = [];
    for (let i = 0; i < length; i++) {
        output.push(" ");
    }
    return output;
}

function generateHeart() {
    const output = [];
    output.push([...generateSpace(5), ...generateBinary(3), ...generateSpace(9), ...generateBinary(3), ...generateSpace(5)])
    output.push([...generateSpace(4), ...generateBinary(5), ...generateSpace(7), ...generateBinary(5), ...generateSpace(4)])
    output.push([...generateSpace(3), ...generateBinary(7), ...generateSpace(5), ...generateBinary(7), ...generateSpace(3)])
    output.push([...generateSpace(2), ...generateBinary(9), ...generateSpace(3), ...generateBinary(9), ...generateSpace(2)])
    output.push([...generateSpace(1), ...generateBinary(11), ...generateSpace(1), ...generateBinary(11), ...generateSpace(1)])
    output.push([...generateBinary(25)])
    output.push([...generateBinary(27)])
    output.push([...generateBinary(25)])
    output.push([...generateBinary(25)])
    output.push([...generateSpace(1), ...generateBinary(23), ...generateSpace(1)])
    output.push([...generateSpace(2), ...generateBinary(21), ...generateSpace(2)])
    output.push([...generateSpace(3), ...generateBinary(19), ...generateSpace(3)])
    output.push([...generateSpace(4), ...generateBinary(17), ...generateSpace(4)])
    output.push([...generateSpace(5), ...generateBinary(15), ...generateSpace(5)])
    output.push([...generateSpace(6), ...generateBinary(13), ...generateSpace(6)])
    output.push([...generateSpace(7), ...generateBinary(11), ...generateSpace(7)])
    output.push([...generateSpace(8), ...generateBinary(9), ...generateSpace(8)])
    output.push([...generateSpace(9), ...generateBinary(7), ...generateSpace(9)])
    output.push([...generateSpace(10), ...generateBinary(5), ...generateSpace(10)])
    output.push([...generateSpace(11), ...generateBinary(3), ...generateSpace(11)])
    output.push([...generateSpace(12), ...generateBinary(1), ...generateSpace(12)])
    return output;
}


const percentChange = .002;

function Home() {
    const [binary, setBinary] = useState(generateHeart());
    const [scrollPosition, setScrollPosition] = useState(0);
    function handleScroll() {
        setScrollPosition(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        setInterval(() => {
            for (let i = 0; i < Math.floor(binary.length * binary[0].length * percentChange); i++) {
                const rowIdx = Math.floor(Math.random() * binary.length);
                const colIdx = Math.floor(Math.random() * binary[0].length);
                if (binary[rowIdx][colIdx] !== " ") {
                    binary[rowIdx][colIdx] = binary[rowIdx][colIdx] === 0 ? 1 : 0;
                }
            }
            setBinary([...binary]);
        }, 1);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="full hero-cover">
                <h1 className="hero-text" style={{ color: `rgba(243, 142, 186, ${(Math.min((scrollPosition / window.innerHeight) + .1, 1))}` }}>Cupid Computing</h1>
            </div>
            <div className="absolute-full hero">
                {
                    binary.map((val, idx) => {
                        const binaryString = val.join(" ");
                        return (
                            <code key={idx} className="binary-text" style={{ color: `rgba(243, 142, 186, ${Math.max(1 - (scrollPosition / window.innerHeight), 0)}` }}>{binaryString}</code>
                        )
                    })
                }
            </div>
            <div className="full"></div>
        </>
    );
}

export default Home;
