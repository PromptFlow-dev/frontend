import Navbar from '../components/Navbar.jsx';
import Hero from '../components/landing/Hero.jsx';
import Progress from '../components/landing/Progress.jsx';
import Works from '../components/landing/Works.jsx';
import Founders from '../components/landing/Founders.jsx';
import Contact from '../components/landing/Contact.jsx';
import Footer from '../components/landing/Footer.jsx';


function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <Hero />

            {/* Progress Section */}
            <Progress />

            {/* How It Works Section */}
            <Works />

            {/* Founders Section */}
            <Founders />

            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default LandingPage;