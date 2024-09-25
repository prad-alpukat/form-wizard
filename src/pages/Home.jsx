import { useState } from 'react'

export default function Home() {
    const [step, setStep] = useState(1)

    return (
        <div className=''>
            <h1 className='text-3xl font-bold'>Form Wizard</h1>

            <div>
                <h2 className='text-2xl font-bold'>Form Steps</h2>
                <div className='flex space-x-4'>
                    <button
                        className='bg-blue-500 text-white px-4 py-2 rounded-lg'
                        onClick={() => setStep(1)}
                    >
                        Form1
                    </button>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-lg' onClick={() => setStep(2)}>Form2</button>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-lg' onClick={() => setStep(3)}>Form3</button>
                </div>
            </div>

            <div className='relative'>
                <Form1 className={
                    step === 1 ? 'z-10 opacity-1' : 'opacity-0 -z-10 pointer-events-none '
                } />
                <Form2 className={
                    step === 2 ? 'z-10 opacity-1' : 'opacity-0 -z-10 pointer-events-none '
                } />
                <Form3 className={
                    step === 3 ? 'z-10 opacity-1' : 'opacity-0 -z-10 pointer-events-none '
                } />
            </div>
        </div>
    )
}

function Form1({ className }) {
    return (
        <div className={`${className} absolute top-0 left-0 transition-all duration-300`}>
            <h1 className='text-3xl font-bold'>Form1</h1>
        </div>
    )
}

function Form2({ className }) {
    return (
        <div className={`${className} absolute top-0 left-0 transition-all duration-300`}>
            <h1 className='text-3xl font-bold'>Form2</h1>
        </div>
    )
}

function Form3({ className }) {
    return (
        <div className={`${className} absolute top-0 left-0 transition-all duration-300`}>
            <h1 className='text-3xl font-bold'>Form3</h1>
        </div>
    )
}
