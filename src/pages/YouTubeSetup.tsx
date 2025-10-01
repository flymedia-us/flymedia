import Header from '@/components/Header';
import Footer from '@/components/Footer';

const YouTubeSetup = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Connect Your YouTube Studio
          </h1>
          <p className="text-gray-400 text-lg mb-12">
            Follow these simple steps to securely grant us access to your YouTube channel so we can help grow your audience and manage reward payouts (when applicable).
          </p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="dynamic-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Visit YouTube Studio</h3>
                  <p className="text-gray-300 mb-4">
                    Navigate to{' '}
                    <a 
                      href="https://studio.youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-400 underline"
                    >
                      studio.youtube.com
                    </a>
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <p className="text-sm text-gray-400 text-center">Image: YouTube Studio homepage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="dynamic-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Verify Your Account</h3>
                  <p className="text-gray-300 mb-2">
                    Ensure you're logged into the correct channel by checking the account switcher in the top right corner.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <p className="text-sm text-gray-400 text-center">Image: Account switcher location</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="dynamic-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Open Settings</h3>
                  <p className="text-gray-300 mb-2">
                    Click the <strong>Settings</strong> button in the bottom left corner of YouTube Studio.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <p className="text-sm text-gray-400 text-center">Image: Settings button location</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="dynamic-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Navigate to Permissions</h3>
                  <p className="text-gray-300 mb-2">
                    Click <strong>Permissions</strong> in the settings menu.
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <p className="text-sm text-gray-400 text-center">Image: Permissions menu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="dynamic-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Invite Team Member</h3>
                  <p className="text-gray-300 mb-2">Click the <strong>Invite</strong> button.</p>
                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                    <p className="text-sm text-gray-400 text-center">Image: Invite button</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="dynamic-card p-6 border-2 border-red-600/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-lg">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Enter Email Address</h3>
                  <p className="text-gray-300 mb-3">
                    Enter the following email address:
                  </p>
                  <div className="bg-red-950/30 border border-red-600 rounded-lg p-4 mb-3">
                    <code className="text-red-400 text-lg font-mono">sam@flymedia.us</code>
                  </div>
                  <p className="text-yellow-400 text-sm">
                    ⚠️ Important: Make sure it's <strong>.us</strong>, not .com
                  </p>
                </div>
              </div>
            </div>

            {/* Step 7 */}
            <div className="dynamic-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-lg">
                  7
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Set Access Level</h3>
                  <p className="text-gray-300 mb-4">
                    Change the access level to <strong>Manager</strong> (preferred).
                  </p>
                  
                  <div className="bg-blue-950/30 border border-blue-600 rounded-lg p-4 mb-4">
                    <p className="text-blue-300 text-sm mb-2">
                      <strong>Why Manager access?</strong>
                    </p>
                    <p className="text-gray-300 text-sm">
                      Manager access allows Sam to invite other team members who will help optimize your content and grow your channel. This streamlines our workflow and gets you results faster.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">✓</span>
                      <div>
                        <p className="text-gray-200 font-semibold">Option 1 (Recommended): Manager</p>
                        <p className="text-gray-400 text-sm">Access to invite team members and manage content</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-500 font-bold">○</span>
                      <div>
                        <p className="text-gray-200 font-semibold">Option 2 (Alternative): Editor</p>
                        <p className="text-gray-400 text-sm">Sam can edit content but cannot invite team members</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-orange-500 font-bold">○</span>
                      <div>
                        <p className="text-gray-200 font-semibold">Option 3 (Limited): Viewer</p>
                        <p className="text-gray-400 text-sm">Sam has read-only access</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 rounded-lg p-4 border border-gray-800 mt-4">
                    <p className="text-sm text-gray-400 text-center">Image: Access level dropdown</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 8 */}
            <div className="dynamic-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-lg">
                  8
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Complete Setup</h3>
                  <p className="text-gray-300 mb-2">
                    Click <strong>Done</strong> to send the invitation.
                  </p>
                  <p className="text-gray-400 text-sm">
                    Note: You may need to verify your account password to complete this step.
                  </p>
                </div>
              </div>
            </div>

            {/* Success Message */}
            <div className="bg-gradient-to-r from-green-950/30 to-green-900/20 border border-green-600 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-2">All Set! 🎉</h3>
              <p className="text-gray-300 mb-4">
                Once you've completed these steps, Sam will receive the invitation and our team can start working on growing your channel.
              </p>
              <p className="text-gray-400 text-sm">
                Have questions? Contact us anytime at{' '}
                <a href="mailto:sam@flymedia.us" className="text-red-500 hover:text-red-400 underline">
                  sam@flymedia.us
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default YouTubeSetup;
