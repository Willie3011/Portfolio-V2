import React, { useEffect, useState } from 'react'
import Container from './Container'
import axios from 'axios'
import SectionHeading from './SectionHeading';
import parse from 'html-react-parser';

function About() {
    const [about, setAbout] = useState("");
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const endpoints = [
                    `${import.meta.env.VITE_API_URL}/about`,
                    `${import.meta.env.VITE_API_URL}/skills`,
                ]

                const [aboutResponse, skillsResponse] = await Promise.all([
                    axios.get(endpoints[0]),
                    axios.get(endpoints[1]),
                ])

                if (aboutResponse?.data?.data?.content) {
                    setAbout(aboutResponse.data.data.content)
                }

                if (skillsResponse?.data?.data) {
                    setSkills(skillsResponse.data.data);
                }
            } catch (error) {
                console.log("Error fetching about data: ", error)
            }
        }

        fetchAllData();
    }, [])

    return (
        <div id='about' className="my-16 py-16">
            <Container>
                <SectionHeading heading="About me" paragraph="Here you will find more information about me, What I do, and my current skills mostly in terms of programming and technology."/>

                <div className="grid sm:grid-cols-2 gap-8 ">
                    {/* About me */}
                    <div className="flex flex-col gap-8">
                        <h3 className='font-bold text-xl capitalize'>This is who I am!</h3>
                        <div className="flex flex-col gap-4">
                            {about && (parse(about))}
                        </div>
                        <button className='bg-accent hover:bg-amber-400 text-white font-medium py-4 px-12 rounded-lg w-fit transition-all ease-in-out duration-300 hover:-translate-y-1 cursor-pointer'>Contact</button>
                    </div>
                    {/* Skills */}
                    <div className="">
                        <h3 className='font-bold mb-8 text-xl capitalize'>my skills</h3>
                        <div className="flex gap-4 flex-wrap">
                            {
                                skills && (
                                    skills.map(skill => {
                                        return <span className='text-primary rounded-md p-4 bg-gray-700/10 font-medium' key={skill._id}>{skill.name}</span>
                                    })
                                )
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About