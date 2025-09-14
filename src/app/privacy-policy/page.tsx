import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Eye, Globe, Lock, Mail, Shield, Users } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Information We Collect */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="h-6 w-6 mr-2 text-purple-600" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Personal Information</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>
                  Shopify account details (store name, domain, owner info)
                </li>
                <li>Email, billing, and payment details</li>
                <li>Customer wallet addresses (for NFT verification)</li>
                <li>Support requests, feedback, and communications</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">
                Automatically Collected Information
              </h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Device/IP/browser data for analytics</li>
                <li>App usage logs and performance metrics</li>
                <li>Cookies or local storage (for session management)</li>
                <li>NFT ownership & trait data (public blockchain records)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Data */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-6 w-6 mr-2 text-purple-600" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Enable NFT-based discounts in your Shopify store</li>
              <li>Authenticate wallet addresses & traits</li>
              <li>Provide billing, support, and troubleshooting</li>
              <li>Comply with Shopify’s mandatory webhook data requirements</li>
              <li>Improve app performance and security</li>
            </ul>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="h-6 w-6 mr-2 text-purple-600" />
              Data Protection & Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Encryption for data in transit and at rest</li>
              <li>Limited access controls for employees</li>
              <li>Shopify-approved billing and payment providers</li>
              <li>Regular backups and incident response procedures</li>
            </ul>
          </CardContent>
        </Card>

        {/* Retention */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-purple-600" />
              Data Retention
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Shopify session data: As long as store remains connected</li>
              <li>Billing records: 7 years (tax purposes)</li>
              <li>Wallet verifications: Until deleted by customer</li>
              <li>Webhook logs: Per Shopify’s GDPR compliance rules</li>
            </ul>
          </CardContent>
        </Card>

        {/* Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-6 w-6 mr-2 text-purple-600" />
              Your Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Request access, correction, or deletion of data</li>
              <li>Withdraw consent for data processing</li>
              <li>Request export of your data (Shopify GDPR APIs supported)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Third Parties */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="h-6 w-6 mr-2 text-purple-600" />
              Data Sharing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Shopify APIs (mandatory app integration)</li>
              <li>Blockchain networks (public NFT data)</li>
              <li>Infrastructure providers (hosting, analytics)</li>
              <li>Legal requests (when required)</li>
            </ul>
            <p className="text-gray-600 mt-4">
              We never sell or rent personal data.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="h-6 w-6 mr-2 text-purple-600" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Email: <strong>privacy@nftauth.com</strong>
              <br />
              Address: NFT Auth Privacy Team, 123 Blockchain Street, Crypto City
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
