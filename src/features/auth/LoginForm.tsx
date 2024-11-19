"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CustomIcons, IconNames } from "@/assets/CustomIcons";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-2">
      <div className="relative hidden md:block">
        <Image
          src="/login-coffee.jpg"
          alt="Coffee cups with latte art"
          fill={true}
          objectFit="cover"
          priority
          className="rounded-lg h-full w-full"
        />
        <div className="absolute text-3xl font-semibold text-white px-4 py-2 rounded-md">
          Espress Yourself.
        </div>
      </div>

      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 p-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-gray-500">Enter your credentials to sign in</p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-right">
                <Link
                  className="text-sm text-primary hover:underline"
                  href="/forgot-password"
                >
                  Forgot your password?
                </Link>
              </div>
              <Button
                className="w-full bg-green-500 hover:bg-green-600"
                type="submit"
              >
                Log In
              </Button>
            </form>
          </Form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                OR
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Button variant="outline" type="button">
              <CustomIcons icon={IconNames.Facebook} />
              Sign in with Facebook
            </Button>
            <Button variant="outline" type="button">
              <CustomIcons icon={IconNames.Google} />
              Sign in with Google
            </Button>
          </div>
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link className="text-primary hover:underline" href="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
