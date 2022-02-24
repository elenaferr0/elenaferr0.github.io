import React from 'react';
import Typewriter from "typewriter-effect";

const cmds: Record<string, string> = {
    'elena@debian-vm:': '#42f557',
    '$~': '#4272f5',
    '   cd ./Documents/Portfolio<br>': '#fff',
    ' cat portfolio.txt': '#fff',
    '<br><br>[!] Educational background [!]<br>': '#ec03fc',
    '~ [2017-2021] - High School Diploma at ITIS C. Zuccante<br>': '#fff',
    '~ [2021-now] - Bachelor\'s degree at UniPD<br><br>': '#fff',
    '[!] Backend programming [!]<br>': '#ec03fc',
    '~ Java & SpringBoot<br>~ PHP<br>~ Python & Flask<br>~ SQL<br><br>': '#fff',
    '[!] Frontend programming [!]<br>': '#ec03fc',
    '~ HTML & CSS<br>~ JavaScript - Typescript & React.js<br>~ Dart & Flutter<br><br>': '#fff',
    '[!] Other skills [!]<br>': '#ec03fc',
    '~ C/C++<br>~ Git<br>~ LaTeX<br><br>': '#fff',
    '[!] Useful links [!]<br>': '#ec03fc',
    '~ <a href=\'mailto:elena.ferro@gmail.com\'>Email</a><br>~ <a href=\'https://github.com/elenaferr0/\' target=\'blank\'>GitHub</a><br><br><br>': '#fff',
}

const createCommand = (i: number) => {
    const key = Object.keys(cmds)[i]
    return `<span style=\'color: ${cmds[key]}\'>${key}</span>`
}

const prompt = () => createCommand(0) + createCommand(1);

const HomePage: React.FC = () => {
    return (
        <div className="container">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString(prompt())
                        .typeString(createCommand(2))
                        .typeString(prompt())
                        .typeString(createCommand(3))
                        .typeString(createCommand(4))
                        .typeString(createCommand(5))
                        .typeString(createCommand(6))
                        .typeString(createCommand(7))
                        .typeString(createCommand(8))
                        .typeString(createCommand(9))
                        .typeString(createCommand(10))
                        .typeString(createCommand(11))
                        .typeString(createCommand(12))
                        .typeString(createCommand(13))
                        .typeString(createCommand(14))
                        .typeString(createCommand(15))
                        .pauseFor(2000)
                        .start();
                }}

                options={{
                    cursor: '_',
                    delay: 0

                }}
            />
        </div>
    );
}
export default HomePage;
