import React from 'react'
import { Nav } from '../components/Header/Nav'
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection'
import FooterSection from '../components/FooterSection'
import Features from '../components/Feature'

export default function LandingPage() {
    return (
        <>
            <HeroSection />
            <Features />
        </>
    )
}
