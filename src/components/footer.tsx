import { Globe, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold">NFT Auth</span>
            </div>
            <p className="text-gray-400 mb-4">
              Revolutionizing e-commerce with NFT-powered authentication and
              exclusive discounts.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Globe className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button className="hover:text-white transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  API Documentation
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Integrations
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button className="hover:text-white transition-colors">
                  Help Center
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Contact Support
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Status Page
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Community
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  Cookie Policy
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors">
                  GDPR
                </button>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} NFT Auth. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">
              Built for Shopify merchants
            </span>
            <Badge
              variant="outline"
              className="border-purple-400 text-purple-400"
            >
              Blockchain Powered
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
}
