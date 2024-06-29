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
                <p className="hero-text" style={{ color: `rgba(243, 142, 186, ${(Math.min((scrollPosition / window.innerHeight) + .1, 1))}` }}>Cupid Computing</p>
            </div>
            <div className="absolute-full hero">
                {
                    binary.map((val, idx) => {
                        const binaryString = val.join(" ");
                        return (
                            <code key={idx} className="binary-text" style={{ color: `rgba(243, 142, 186, ${Math.max(1 - (scrollPosition * 2 / window.innerHeight), 0)}` }}>{binaryString}</code>
                        )
                    })
                }
            </div>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12">
                        <p>
                            Cupid Computing aims to revolutionize the dating landscape by combining the magic of in-person events with
                            novel algorithmic matchmaking techniques. Come to the event single and leave with a match by the end. Our first event
                            is the <a href="https://datinginchicago.eventbrite.com">18th of July</a> in Chicago, so sign up quickly 
                            while there's space!
                        </p>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-12">
                        <h2>How do I sign up?</h2>
                        <ol>
                            <li>
                                Buy a ticket to at our <a href="https://datinginchicago.eventbrite.com">Eventbrite</a> page. Doing so earlier will ensure
                                that you can get a early bird ticket, which is discounted at $25. After the early bird tickets sell out, then regular tickets
                                will sell at $35.
                            </li>
                            <li>
                                Once you buy a ticket, you will be added to the official list of attendees!
                            </li>
                            <li>
                                The day before the event (July 17th), we will send out a survey for official attendees to fill out.
                            </li>
                            <li>
                                Attend the event on July 18th!
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-12">
                        <h2>Common Q&A</h2>
                        <p><i>What if I can't make it anymore? Can I get a refund?</i></p>
                        <p>
                            Unfortunately, we are not allowing refunds for most cases. In the scenario where you are no longer
                            able to attend, there are two possible options. If you fill out the survey and we get permission from your match, we can still exchange
                            contact information on your behalf so that you and your match can still plan a date together. If you haven't filled out the survey yet, 
                            we highly encourage that you find a friend of the same gender to attend in your place.
                        </p>
                        <p><i>What will happen at the event?</i></p>
                        <p>
                            The event will take place at <a href="https://www.loft22chi.com/">Loft 22</a>. Throughout the night there will be games to encourage
                            mingling, and, towards the end of the night, we will release everyone's match results so matches can meet one another!
                        </p>
                        <p><i>Is there a fee?</i></p>
                        <p>
                            The cost for the ticket is $35 ($25 for Early Bird). Please also note that the fee does not cover drinks or food.
                        </p>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-12 text-center">
                        <p className="footer-description">Made by the Cupid Computing team with <span>♥</span></p>
                    </div>
                    <div className="col-3"></div>
                    <div className="col-2 text-center">
                        <a href="https://www.instagram.com/cupidcomputing/"><i className="bi bi-instagram footer-icon"></i></a>
                    </div>
                    <div className="col-2 text-center">
                        <a href="https://www.tiktok.com/@matchboxchicago"><i className="bi bi-tiktok footer-icon"></i></a>
                    </div>
                    <div className="col-2 text-center">
                        <a href="mailto:cupidcomputing@gmail.com"><i className="bi bi-envelope footer-icon"></i></a>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </>
    );
}

export default Home;
