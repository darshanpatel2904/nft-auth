import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CreditCard,
  FileText,
  Globe,
  Mail,
  Shield,
  Trash2,
  Users,
  Zap,
} from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Service Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-6 w-6 mr-2 text-purple-600" />
              Service Description
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              NFT Auth is a Shopify extension that allows store owners to create
              NFT-based discounts, verify ownership, and manage token-gated
              products.
            </p>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-6 w-6 mr-2 text-purple-600" />
              User Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide accurate Shopify and billing information</li>
              <li>Comply with Shopify App Store terms and policies</li>
              <li>Not use service for fraud, abuse, or illegal activity</li>
              <li>Respect NFT creators’ intellectual property</li>
            </ul>
          </CardContent>
        </Card>

        {/* Billing & Refunds */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="h-6 w-6 mr-2 text-purple-600" />
              Billing & Refunds
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Plans are billed via Shopify Billing API</li>
              <li>Subscriptions renew every 30 days</li>
              <li>
                Free trial per plan as defined (Growth: 14d, Pro/Scale: 1d)
              </li>
              <li>No refunds except where legally required</li>
              <li>Cancel anytime via Shopify admin</li>
            </ul>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trash2 className="h-6 w-6 mr-2 text-purple-600" />
              Termination
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              We may suspend or terminate service for violation of these terms,
              Shopify policies, or non-payment. You may cancel anytime in your
              Shopify admin.
            </p>
          </CardContent>
        </Card>

        {/* Liability */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-6 w-6 mr-2 text-purple-600" />
              Limitation of Liability
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Service is provided “AS IS.” We are not liable for indirect or
              consequential damages. Liability is limited to fees paid in the 12
              months preceding claim, unless otherwise required by law.
            </p>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="h-6 w-6 mr-2 text-purple-600" />
              Governing Law
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              These terms are governed by the laws of [Your Jurisdiction]. EU
              consumers retain rights under their national consumer laws.
            </p>
          </CardContent>
        </Card>

        {/* Changes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="h-6 w-6 mr-2 text-purple-600" />
              Changes to Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              We may update these terms. Notice will be provided via Shopify app
              admin or email at least 30 days before major changes take effect.
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
              Email: <strong>legal@nftauth.com</strong>
              <br />
              Support: <strong>support@nftauth.com</strong>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
