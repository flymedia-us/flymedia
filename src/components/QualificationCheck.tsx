
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle } from 'lucide-react';

const QualificationCheck = () => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false]);

  const qualifications = [
    "You're a performer/entertainer",
    "You have raw footage of your performances",
    "Your social media could be improved"
  ];

  const handleCheck = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <div className="mx-auto mb-6 p-4 bg-black/30 rounded-full w-fit animate-float">
            <CheckCircle className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Is <span className="gradient-text">Fly Media</span> Right for You?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Check off the items that apply to you to see if we're a perfect match
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="dynamic-card p-8 rounded-lg">
            <div className="space-y-6">
              {qualifications.map((qualification, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Checkbox
                    id={`qualification-${index}`}
                    checked={checkedItems[index]}
                    onCheckedChange={() => handleCheck(index)}
                    className="w-6 h-6"
                  />
                  <label
                    htmlFor={`qualification-${index}`}
                    className={`text-lg cursor-pointer transition-colors duration-300 ${
                      checkedItems[index] ? 'text-green-400' : 'text-gray-300'
                    }`}
                  >
                    {qualification}
                  </label>
                </div>
              ))}
            </div>
            
            {checkedItems.every(item => item) && (
              <div className="mt-8 p-4 bg-green-600/20 border border-green-600/30 rounded-lg animate-slide-up">
                <p className="text-green-400 text-center font-semibold">
                  Perfect! You're an ideal candidate for Fly Media's services. 
                  <span className="block mt-2 text-white">Ready to transform your social media presence?</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationCheck;
