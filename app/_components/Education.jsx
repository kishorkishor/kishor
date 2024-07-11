import React from 'react';
import Head from 'next/head';

export default function Education() {
    return (
        <div>
            <Head>
                {/* Import Spline scene */}
                <script type="module" src="https://prod.spline.design/rNWIKytAccIyCr9A/scene.splinecode"></script>
            </Head>
            <section style={{ margin: '1rem 0', padding: '0 10rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1, marginRight: '20px' }}>
                    <h2 style={{ fontSize: '4.0rem', marginBottom: '1rem' }}>Education</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2.0rem' }}>
                        <li>Bachelor of Engineering in Computer Science and Engineering from American International University – Bangladesh</li>
                        <ul style={{ listStyleType: 'circle', paddingLeft: '2.0rem' }}>
                            <li>CGPA: 3.92</li>
                        </ul>
                        <li>Govt. Science College, Tejgaon, Dhaka (GPA 5.0)</li>
                        <li>Motijheel Government Boys' High School (GPA 5.0)</li>
                    </ul>
                    <h2 style={{ fontSize: '4.0rem', marginBottom: '1rem', marginTop: '2rem' }}>Internship Experience</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '2.0rem' }}>
                        <li>Position: Intern at Geo Teach</li>
                        <ul style={{ listStyleType: 'circle', paddingLeft: '2.0rem' }}>
                            <li>Duration: 1 year</li>
                            <li>Project Research and Planning: Involved in detailed project research and planning phases</li>
                            <li>Efficiency Improvement: Enhanced project timelines and efficiency through innovative thinking</li>
                            <li>Developed various web applications using Angular and ASP.NET Core</li>
                            <li>Designed efficient algorithms for application functionality</li>
                        </ul>
                    </ul>
                </div>
                <div style={{ width: '300px', height: '500px' }}>
                    {/* Spline viewer */}
                    <spline-viewer url="https://prod.spline.design/rNWIKytAccIyCr9A/scene.splinecode"></spline-viewer>
                </div>
            </section>
        </div>
    );
}
