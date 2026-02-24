export const metadata = {
  title: "Refund Policy | ShopMart",
  description: "ShopMart Refund Policy - Secure Escrow-Based Marketplace",
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero / Header */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto px-5 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Refund Policy
          </h1>
          <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-3xl">
            ShopMart operates a secure escrow-based marketplace. This policy outlines when and how refunds are processed to protect both buyers and sellers.
          </p>
          <p className="mt-3 text-sm text-blue-200">
            Last updated: February 23, 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 py-12 md:py-16">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
          <div className="px-8 pt-10 pb-12 md:px-12 md:pt-12 md:pb-16">
            {/* Intro */}
            <div className="prose prose-lg prose-gray max-w-none mb-12">
              <p className="text-gray-700 leading-relaxed">
                ShopMart is committed to fair and transparent transactions. All payments are held securely in escrow until the buyer confirms satisfactory delivery. 
                This Refund Policy explains eligibility, the process, timelines, and important limitations.
              </p>
            </div>

            {/* Sections with improved styling */}
            <div className="space-y-14">
              {/* 1 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-5 border-b border-gray-200 pb-3">
                  1. When You Are Eligible for a Refund
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl leading-none">✓</span>
                    <span>Product arrives damaged or materially defective</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl leading-none">✓</span>
                    <span>Wrong or significantly different item received</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl leading-none">✓</span>
                    <span>Clear mismatch between listing description/photos and delivered product</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl leading-none">✓</span>
                    <span>Non-delivery or severe delay beyond the promised delivery window</span>
                  </li>
                </ul>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-5 border-b border-gray-200 pb-3">
                  2. How the Escrow & Refund System Works
                </h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p>
                    All buyer payments are held in secure escrow and <strong>not released</strong> to the seller until:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The buyer confirms receipt and satisfaction</li>
                    <li>The inspection/return period (usually 7–14 days) passes without dispute</li>
                  </ul>
                  <p>
                    If a valid refund request or dispute is approved, funds are returned to the buyer directly from escrow — quickly and securely.
                  </p>
                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-5 border-b border-gray-200 pb-3">
                  3. Refund Processing Timeline
                </h2>
                <p className="text-gray-700">
                  Once approved, most refunds are processed within <strong>5–10 business days</strong>. 
                  Time may vary depending on:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>Your payment method / bank</li>
                  <li>Verification of returned items (when required)</li>
                  <li>Public holidays or weekends</li>
                </ul>
                <p className="mt-4 text-gray-700">
                  Refunds are always issued to the <strong>original payment method</strong>.
                </p>
              </section>

              {/* 4 & 5 combined for better flow */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-5 border-b border-gray-200 pb-3">
                  4. Partial Refunds & Non-Refundable Items
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Partial Refunds</h3>
                    <p className="text-gray-700">
                      May be offered for minor issues, missing accessories, or when mutually agreed by buyer and seller.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Non-Refundable / Non-Returnable</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Platform / transaction service fees</li>
                      <li>Shipping fees (unless seller error is proven)</li>
                      <li>Digital products, gift cards, downloadable content</li>
                      <li>Personalized / custom-made items (unless faulty)</li>
                      <li>Items marked “final sale” in the listing</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-5 border-b border-gray-200 pb-3">
                  5. How Disputes Are Resolved
                </h2>
                <p className="text-gray-700 mb-4">
                  We aim to resolve issues quickly and fairly. If buyer and seller cannot agree:
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                  <li>Both parties may upload evidence (photos, videos, chat logs, receipts)</li>
                  <li>ShopMart’s support team reviews the case within 48–72 hours</li>
                  <li>A final, binding decision is made based on platform rules and submitted proof</li>
                </ol>
              </section>

              {/* Contact */}
              <section className="bg-blue-50 rounded-xl p-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  Questions? Contact Support
                </h2>
                <div className="space-y-4 text-gray-800">
                  <p className="flex items-center">
                    <span className="font-medium">Email:</span>
                    <a href="mailto:support@shopmart.com" className="ml-2 text-blue-700 hover:underline">
                      support@shopmart.com
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium">Phone:</span>
                    <span className="ml-2">+880-XXXXXXXXXX</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-6">
                    We usually respond within 24 hours on business days.
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Footer note */}
          <div className="bg-gray-50 px-8 py-6 text-center text-sm text-gray-500 border-t">
            This policy may be updated from time to time. Continued use of ShopMart constitutes acceptance of the current version.
          </div>
        </div>
      </div>
    </div>
  );
}