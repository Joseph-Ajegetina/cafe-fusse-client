import { Card, CardBody, Button, Input, Spinner } from '@heroui/react'
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useNewsletterSubscription } from '../../hooks/useNewsletter'

const CTASection = () => {
  const [email, setEmail] = useState('')
  const newsletterMutation = useNewsletterSubscription()

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    
    try {
      await newsletterMutation.mutateAsync(email)
      setEmail('')
    } catch (error) {
      console.error('Newsletter subscription failed:', error)
    }
  }

  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Newsletter Signup */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Follow us
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                @cafefausse
              </p>
            </div>
            
            <p className="text-gray-600 leading-relaxed max-w-md">
              To stay updated with the latest news, promotions, and 
              offerings from the Italian restaurant, make sure to follow 
              our social media accounts. Don't miss out on any updates.
            </p>
            
            {/* Success Message */}
            {newsletterMutation.isSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                🎉 {newsletterMutation.data?.message || 'Thank you for subscribing! Check your email for confirmation.'}
              </div>
            )}
            
            {/* Error Message */}
            {newsletterMutation.isError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                ❌ {newsletterMutation.error?.message || 'Subscription failed. Please try again.'}
              </div>
            )}

            {!newsletterMutation.isSuccess && (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  variant="bordered"
                  isRequired
                  isDisabled={newsletterMutation.isPending}
                  className="max-w-md"
                />
                <Button 
                  type="submit"
                  color="primary"
                  className="rounded-full px-8"
                  isLoading={newsletterMutation.isPending}
                  isDisabled={newsletterMutation.isPending || !email.trim()}
                >
                  {newsletterMutation.isPending ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
            )}
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </div>
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zM10 7a3 3 0 100 6 3 3 0 000-6zm0 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM15.25 6.75a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Right: Instagram Grid */}
          <div className="grid grid-cols-3 gap-2">
            <img src="https://res.cloudinary.com/duym3iexv/image/upload/v1753534172/cafe-fusse/gallery-ribeye-steak_zzoddf.webp" alt="Food 1" className="aspect-square object-cover rounded-lg" />
            <img src="https://res.cloudinary.com/duym3iexv/image/upload/v1753921362/cafe-fusse/desserts/fine-dinning-cafe-dessert-6_kqqudl.png" alt="Food 2" className="aspect-square object-cover rounded-lg" />
            <img src="https://res.cloudinary.com/duym3iexv/image/upload/v1753921358/cafe-fusse/desserts/fine-dinning-cafe-dessert-1_dbcj8v.png" alt="Food 3" className="aspect-square object-cover rounded-lg" />
            <img src="https://res.cloudinary.com/duym3iexv/image/upload/v1753921357/cafe-fusse/desserts/fine-dinning-cafe-dessert-2_j7sdne.png" alt="Food 4" className="aspect-square object-cover rounded-lg" />
            <img src="https://res.cloudinary.com/duym3iexv/image/upload/v1753922285/cafe-fusse/main/fine-dinning-cafe-main-course-1_agppl5.png" alt="Food 5" className="aspect-square object-cover rounded-lg" />
            <img src="https://res.cloudinary.com/duym3iexv/image/upload/v1753922288/cafe-fusse/main/fine-dinning-cafe-main-course--6_tx1o56.png" alt="Food 6" className="aspect-square object-cover rounded-lg" />
            <img src="https://res.cloudinary.com/duym3iexv/image/upload/v1753922287/cafe-fusse/main/fine-dinning-cafe-main-course--2_raog8k.png" alt="Food 7" className="aspect-square object-cover rounded-lg" />
            <img src="https://res.cloudinary.com/duym3iexv/image/upload/v1753921569/cafe-fusse/starters/fine-dinning-cafe-starter-6_y2x8gh.png" alt="Food 8" className="aspect-square object-cover rounded-lg" />
            <img src="https://res.cloudinary.com/duym3iexv/image/upload/v1753921568/cafe-fusse/starters/fine-dinning-cafe-starter-2_alrcxc.png" alt="Food 9" className="aspect-square object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection 