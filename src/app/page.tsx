import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SHOPIFY_APP_URL } from "@/lib/utils";
import { Check, Shield, Star, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const plans = [
    {
      name: "Growth",
      price: "19.99",
      period: "month",
      popular: false,
      features: [
        "10 Rules",
        "All Alchemy Supported Chains",
        "No Start/End date for discount",
        "14 days free trial",
      ],
    },
    {
      name: "Pro",
      price: "24.99",
      period: "month",
      popular: true,
      features: [
        "All from Growth Plan",
        "250 Rules",
        "Start/End date for discount",
        "1 day free trial",
      ],
    },
    {
      name: "Scale",
      price: "44.44",
      period: "month",
      popular: false,
      features: [
        "All from Pro Plan",
        "Unlimited Rules",
        "Email support",
        "TokenGated products Page",
        "1 day free trial",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "E-commerce Director",
      company: "CryptoWear Co.",
      content:
        "NFT Auth transformed our customer engagement. We saw a 40% increase in sales from NFT holders within the first month.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder",
      company: "Digital Collectibles Store",
      content:
        "The trait-based discounting is genius. Our customers love getting exclusive deals based on their rare NFT traits.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Marketing Manager",
      company: "MetaFashion",
      content:
        "Easy setup, powerful features. The TokenGated products page has created a true VIP experience for our NFT community.",
      rating: 5,
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <div className="transition-all duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                NFT Auth
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
              NFT Discount Plugin
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your Shopify store with blockchain-powered discounts.
              Create exclusive offers based on NFT ownership and traits,
              building stronger communities while driving sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6"
                asChild
              >
                <Link href={SHOPIFY_APP_URL} target="_blank">
                  Start 14-Day Free Trial
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2"
                asChild
              >
                <Link href={SHOPIFY_APP_URL} target="_blank">
                  View Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose NFT Auth?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unlock the power of NFT-based commerce with features designed for
              modern digital marketplaces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>NFT ID Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Verify ownership of specific NFTs and create targeted
                  discounts for holders of particular token IDs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Trait-Based Discounts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Reward customers based on their NFT traits - from rarity
                  levels to specific attributes and characteristics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>TokenGated Products</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Create exclusive product pages accessible only to verified NFT
                  holders, building true community value.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your store size and unlock the full
              potential of NFT commerce.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? "border-purple-500 border-2 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${
                      plan.popular
                        ? "bg-purple-600 hover:bg-purple-700"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join hundreds of successful merchants who&apos;ve transformed
              their stores with NFT Auth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-600">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Store?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the future of e-commerce with NFT-powered discounts and
            exclusive product access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 bg-white text-purple-600 hover:bg-gray-100"
              asChild
            >
              <Link href={SHOPIFY_APP_URL} target="_blank">
                Start Your 14-Day Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
