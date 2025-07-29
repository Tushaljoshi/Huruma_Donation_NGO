import React from "react";
import { Handshake, MailCheck, PartyPopper } from "lucide-react";


const VolunteerStepsSection = () => {
    return (
        <section className="bg-[#231942] text-white py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold font-serif text-white">
                        To Have Become A Volunteer Or Donor
                    </h2>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center gap-5 border-r border-white/10 px-6">
                        <div className="w-28 h-28 rounded-full border border-orange-400 flex items-center justify-center">
                            <Handshake className="text-orange-400 w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Select Position</h3>
                            <p className="text-gray-300 text-sm mt-2">
                                Lorem ipsum dolor siamet ectetur adipisicing
                            </p>
                            <p className="text-orange-400 font-medium mt-2 cursor-pointer">
                                Give Requist +
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center gap-5 border-r border-white/10 px-6">
                        <div className="w-28 h-28 rounded-full border border-orange-400 flex items-center justify-center">
                            <MailCheck className="text-orange-400 w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Get Confirmation</h3>
                            <p className="text-gray-300 text-sm mt-2">
                                Dolor Lorem ipsumsiamet ectetur adipiscin
                            </p>
                            <p className="text-orange-400 font-medium mt-2 cursor-pointer">
                                Get Reaction +
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center gap-5 px-6">
                        <div className="w-28 h-28 rounded-full border border-orange-400 flex items-center justify-center">
                            <PartyPopper className="text-orange-400 w-10 h-10" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Get Enjoyed</h3>
                            <p className="text-gray-300 text-sm mt-2">
                                Lorem ipsum dolor siamet ectetur adipisicing
                            </p>
                            <p className="text-orange-400 font-medium mt-2 cursor-pointer">
                                Enjoy Now +
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VolunteerStepsSection;
