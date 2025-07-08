"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HiArrowRight, HiMiniChevronRight } from "react-icons/hi2";
import { onboardingContents } from "@/constants/onboarding";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // Fix hydration mismatch by only rendering animations on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextStep = () => {
    if (currentStep < onboardingContents.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle completion - navigate to login page
      router.push("/auth/login");
    }
  };

  const skipOnboarding = () => {
    // Handle skip - navigate to login page
    router.push("/auth/login");
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  // const progressPercentage =
  //   ((currentStep + 1) / onboardingContents.length) * 100;

  // If not client-side yet, render without animations
  if (!isClient) {
    return (
      <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
        {/* Progress Bar */}
        <div className="w-full flex gap-1 px-4 py-2">
          {onboardingContents.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded-full transition-all duration-500 ease-out ${
                index <= currentStep ? "bg-blue-500" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Skip Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={skipOnboarding}
            className="text-gray-500 flex items-center cursor-pointer text-sm font-medium hover:text-gray-700 transition-colors"
          >
            Skip <HiMiniChevronRight />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-4">
          <div className="flex flex-col items-center">
            <div
              className={twMerge(
                "w-full max-w-xs rounded-2xl p-8 mb-8 flex items-center justify-center",
                onboardingContents[currentStep].color
              )}
            >
              {onboardingContents[currentStep].icon}
            </div>

            <h1 className="text-3xl tracking-tighter font-black text-gray-900 text-center mb-2">
              {onboardingContents[currentStep].title}
            </h1>

            <p className="text-lg text-blue-600 text-center mb-6 font-medium">
              {onboardingContents[currentStep].subtitle}
            </p>

            <p className="text-gray-400 text-center leading-relaxed px-4">
              {onboardingContents[currentStep].description}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="p-6 space-y-6">
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mb-6">
            {onboardingContents.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={twMerge(
                  "cursor-pointer rounded-full transition-all duration-300",
                  index === currentStep
                    ? "bg-blue-500 w-8 h-2"
                    : "bg-gray-300 hover:bg-gray-400 w-2 h-1.5"
                )}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextStep}
            className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-full font-semibold text-medium flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors"
          >
            <span>
              {currentStep === onboardingContents.length - 1
                ? "Get Started"
                : "Next"}
            </span>
            <HiArrowRight className="w-5 h-5" />
          </button>

          {/* Step Counter */}
          <div className="text-center text-sm text-gray-500 mt-4">
            {currentStep + 1} of {onboardingContents.length}
          </div>
        </div>
      </div>
    );
  }

  // Client-side render with animations
  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      {/* Progress Bar */}
      <div className="w-full flex gap-1 px-4 py-2">
        {onboardingContents.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1 flex-1 rounded-full ${
              index <= currentStep ? "bg-blue-500" : "bg-gray-200"
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            style={{ transformOrigin: "left" }}
          />
        ))}
      </div>

      {/* Skip Button */}
      <motion.div
        className="flex justify-end p-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <button
          onClick={skipOnboarding}
          className="text-gray-500 flex items-center cursor-pointer text-sm font-medium hover:text-gray-700 transition-colors"
        >
          Skip <HiMiniChevronRight />
        </button>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <motion.div
              className={twMerge(
                "w-full max-w-xs rounded-2xl p-8 mb-8 flex items-center justify-center",
                onboardingContents[currentStep].color
              )}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {onboardingContents[currentStep].icon}
            </motion.div>

            <motion.h1
              className="text-3xl tracking-tighter font-black text-gray-900 text-center mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {onboardingContents[currentStep].title}
            </motion.h1>

            <motion.p
              className="text-lg text-blue-600 text-center mb-6 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {onboardingContents[currentStep].subtitle}
            </motion.p>

            <motion.p
              className="text-gray-400 text-center leading-relaxed px-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              {onboardingContents[currentStep].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Section */}
      <motion.div
        className="p-6 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mb-6">
          {onboardingContents.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToStep(index)}
              className={twMerge(
                "cursor-pointer rounded-full transition-all duration-300",
                index === currentStep
                  ? "bg-blue-500 w-8 h-1.5"
                  : "bg-gray-300 hover:bg-gray-400 w-2 h-1.5"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          onClick={nextStep}
          className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-full font-semibold text-medium flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>
            {currentStep === onboardingContents.length - 1
              ? "Get Started"
              : "Next"}
          </span>
          <HiArrowRight className="w-5 h-5" />
        </motion.button>

        {/* Step Counter */}
        <motion.div
          className="text-center text-sm text-gray-500 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {currentStep + 1} of {onboardingContents.length}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OnboardingFlow;

