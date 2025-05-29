import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy-policy')({
    component: RouteComponent,
})

function RouteComponent() {

    return (
        <div className="container py-12 max-w-4xl">
            <h1 className="text-3xl font-bold text-primary mb-8">Privacy Policy</h1>

            <div className="prose prose-lg">
                <p className="text-lg mb-6">
                    Last Updated: August 16, 2025
                </p>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Introduction</h2>
                <p className="mb-4">
                    Welcome to Healcation ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience when using our mobile application ("App") and related services (collectively, "Services").
                </p>
                <p className="mb-4">
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Services. Please read this Privacy Policy carefully. By accessing or using our Services, you agree to this Privacy Policy.
                </p>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Information We Collect</h2>

                <h3 className="text-xl font-bold text-primary mt-6 mb-3">2.1 Personal Information</h3>
                <p className="mb-4">
                    We may collect personal information that you voluntarily provide when using our Services, including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Profile information (profile picture, preferences)</li>
                    <li>Payment information (credit card details, billing address)</li>
                    <li>Travel preferences and history</li>
                    <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-bold text-primary mt-6 mb-3">2.2 Automatically Collected Information</h3>
                <p className="mb-4">
                    When you use our Services, we automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Device information (device type, operating system, unique device identifiers)</li>
                    <li>Log information (IP address, access times, app features used)</li>
                    <li>Location information (with your permission)</li>
                    <li>Usage data (interactions with the app, search queries, booking information)</li>
                    <li>Cookies and similar technologies</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">
                    We use the information we collect for various purposes, including to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Provide, maintain, and improve our Services</li>
                    <li>Process transactions and send related information</li>
                    <li>Personalize your experience with AI-powered recommendations</li>
                    <li>Communicate with you about our Services</li>
                    <li>Send promotional materials and special offers</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Monitor and analyze usage patterns and trends</li>
                    <li>Protect the security and integrity of our Services</li>
                    <li>Comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. How We Share Your Information</h2>
                <p className="mb-4">
                    We may share your information with the following categories of third parties:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Service providers (hosting, payment processing, customer service)</li>
                    <li>Travel partners (hotels, airlines, activity providers)</li>
                    <li>Business partners (when you explicitly consent)</li>
                    <li>Advertisers and advertising networks (in aggregated or de-identified form)</li>
                    <li>Legal authorities (when required by law)</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Your Choices and Rights</h2>
                <p className="mb-4">
                    You have certain choices regarding the information we collect and how it's used:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Account Information: You can update your account information within the App settings</li>
                    <li>Marketing Communications: You can opt out of receiving promotional emails</li>
                    <li>Location Data: You can enable or disable location services in your device settings</li>
                    <li>Cookies: You can set your browser to refuse cookies</li>
                    <li>Data Access and Portability: You can request a copy of your data</li>
                    <li>Deletion: You can request deletion of your personal information</li>
                </ul>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Data Security</h2>
                <p className="mb-4">
                    We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. International Data Transfers</h2>
                <p className="mb-4">
                    Your information may be transferred to, and processed in, countries other than the country you live in. These countries may have different data protection laws. When we transfer your information, we will take steps to ensure that it receives an adequate level of protection.
                </p>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. Children's Privacy</h2>
                <p className="mb-4">
                    Our Services are not directed to children under 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">9. Changes to This Privacy Policy</h2>
                <p className="mb-4">
                    We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this Privacy Policy frequently to stay informed about how we are protecting your information.
                </p>

                <h2 className="text-2xl font-bold text-primary mt-8 mb-4">10. Contact Us</h2>
                <p className="mb-4">
                    If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <address className="not-italic mb-4">
                    <div>Healcation, Inc.</div>
                    <div>123 Vacation Blvd</div>
                    <div>Paradise City, PC 12345</div>
                    <div>Email: privacy@healcation.com</div>
                    <div>Phone: +1 (555) 123-4567</div>
                </address>
            </div>
        </div>
    )
}
