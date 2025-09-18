import { useState } from 'react';

export default function LandingPage() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Subrscribed with:', email);
        // TODO: add logic to send email to backend or API
        setEmail(''); // Clear the input field after submission
};

    return (
        <section className=''