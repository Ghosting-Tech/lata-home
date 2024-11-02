"use client";

import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { Card, CardBody } from "@material-tailwind/react";
import { Tabs, Tab, TabsBody, TabsHeader } from "@material-tailwind/react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  Star,
  Droplets,
  Clock,
  DollarSign,
  Briefcase,
  Home,
} from "lucide-react";
import Image from "next/image";
import { RxDoubleArrowRight } from "react-icons/rx";
import Link from "next/link";
import { BsPersonFillAdd } from "react-icons/bs";

export default function Component() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-teal-100 mb-5">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10" />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-teal-600 xl:inline">
                Sparkling Clean Homes
              </span>
              <span className="block">At Your Service</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
              Professional home cleaning services tailored to your needs.
              Experience the joy of a spotless home without lifting a finger.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/services">
                <Button size="lg" color="teal" className="flex gap-3">
                  Find a Service
                  <RxDoubleArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/become-service-provider">
                <Button
                  size="lg"
                  variant="outlined"
                  color="teal"
                  className="flex gap-3"
                >
                  Become a Service Provider <BsPersonFillAdd />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* New Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                src: "/image/himg-4.webp",
                alt: "Professional cleaner at work",
                title: "Professional Cleaners",
                subtitle: "Trained and vetted staff",
              },
              {
                src: "/image/himg-1.jpg",
                alt: "Eco-friendly cleaning products",
                title: "Eco-Friendly Products",
                subtitle: "Safe for your home and the environment",
              },
              {
                src: "/image/himg-8.webp",
                alt: "Satisfied customer in a clean home",
                title: "100% Satisfaction",
                subtitle: "Guaranteed clean and happy homes",
              },
            ].map((image, index) => (
              <div
                key={index}
                className="relative h-64 md:h-auto md:aspect-[3/4] rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm">{image.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Users, label: "Happy Customers", value: "10,000+" },
              { icon: Star, label: "Service Rating", value: "4.8/5.0" },
              { icon: Sparkles, label: "Homes Cleaned", value: "50,000+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardBody className="flex items-center gap-4 p-6">
                    <stat.icon className="h-12 w-12 text-teal-500" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
