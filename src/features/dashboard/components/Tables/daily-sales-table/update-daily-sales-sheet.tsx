"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import {
  updateDailySalesSchema,
  type UpdateDailySalesSchema,
} from "@/lib/daily-sales-validations";
import { DailySales } from "@/schema/DailySalesSchema";
import { updateDailySales } from "@/lib/daily-sales-actions";

interface UpdateDailySalesSheetProps
  extends React.ComponentPropsWithRef<typeof Sheet> {
  dailySales: DailySales | null;
}

export function UpdateDailySalesSheet({
  dailySales,
  ...props
}: UpdateDailySalesSheetProps) {
  const [isUpdatePending, startUpdateTransition] = React.useTransition();

  const form = useForm<UpdateDailySalesSchema>({
    resolver: zodResolver(updateDailySalesSchema),
    defaultValues: {
      sale: dailySales?.sale ?? 0,
      label: dailySales?.label,
      status: dailySales?.status,
      priority: dailySales?.priority,
    },
  });

  React.useEffect(() => {
    form.reset({
      sale: dailySales?.sale ?? 0,
      label: dailySales?.label,
      status: dailySales?.status,
      priority: dailySales?.priority,
    });
  }, [dailySales, form]);

  function onSubmit(input: UpdateDailySalesSchema) {
    startUpdateTransition(async () => {
      if (!dailySales || !dailySales.id) return;

      const updateData = {
        ...input,
        ids: [String(dailySales.id)],
      };

      const { error } = await updateDailySales(updateData);

      if (error) {
        toast.error(error);
        return;
      }

      form.reset();
      props.onOpenChange?.(false);
      toast.success("Daily Sales updated");
    });
  }

  return (
    <Sheet {...props}>
      <SheetContent className="flex flex-col gap-6 sm:max-w-md">
        <SheetHeader className="text-left">
          <SheetTitle>Update daily sales</SheetTitle>
          <SheetDescription>
            Update the daily sales details and save the changes
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="sale"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="daily sales title"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="label"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Label</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="capitalize">
                        <SelectValue placeholder="Select a label" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {["bug", "feature", "enhancement", "documentation"].map(
                          (item) => (
                            <SelectItem
                              key={item}
                              value={item}
                              className="capitalize"
                            >
                              {item}
                            </SelectItem>
                          )
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="capitalize">
                        <SelectValue placeholder="Select a status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {["todo", "in-progress", "done", "canceled"].map(
                          (item) => (
                            <SelectItem
                              key={item}
                              value={item}
                              className="capitalize"
                            >
                              {item}
                            </SelectItem>
                          )
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="capitalize">
                        <SelectValue placeholder="Select a priority" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {["low", "medium", "high"].map((item) => (
                          <SelectItem
                            key={item}
                            value={item}
                            className="capitalize"
                          >
                            {item}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SheetFooter className="gap-2 pt-2 sm:space-x-0">
              <SheetClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </SheetClose>
              <Button disabled={isUpdatePending}>
                {isUpdatePending && (
                  <Loader
                    className="mr-2 size-4 animate-spin"
                    aria-hidden="true"
                  />
                )}
                Save
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
