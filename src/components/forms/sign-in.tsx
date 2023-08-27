"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";

import { authSchema } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { PasswordInput } from "@/components/password-input";
import { cn } from "@/lib/utils";

type Inputs = z.infer<typeof authSchema>;

export function SignInForm() {
  const router = useRouter();
  //   const { isLoaded, signIn, setActive } = useSignIn();
  const [isPending, startTransition] = React.useTransition();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: Inputs) {
    // if (!isLoaded) return;

    startTransition(async () => {
      try {
        // sign in logic
      } catch (err) {
        // catchClerkError(err);
        // here redirect them to error page
      }
    });
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-4 w-[30%] border rounded-lg mx-auto justify-center  p-8 h-[500px]   "
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <h1 className="text-xl font-bold text-gray-900">
          Sign in to ProjectFlow
        </h1>
        <p className="text-md  text-gray-900">
          Not your device? Use a private or incognito window to sign in.
        </p>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="p-4"
                  placeholder="rodneymullen180@gmail.com"
                  {...field}
                />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  className="p-4 "
                  placeholder="**********"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="default"
          size="lg"
          disabled={isPending}
          className={cn(
            "bg-orange-500 hover:bg-orange-700 text-white rounded-full h-12  "
          )}
        >
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Sign in
          <span className="sr-only">Sign in</span>
        </Button>
      </form>
    </Form>
  );
}
