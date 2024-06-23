"use client";

import * as z from 'zod';
import Modal from "../modal";
import { useStoreModal } from "@/hooks/use-modal";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const formSchema = z.object({
    name : z.string().min(3),
})

const onSubmit = async (value: z.infer<typeof formSchema>) => {
    console.log(value);
}

export const StoreModal = () => {
  const storeModal = useStoreModal();
  const form = useForm<z.infer<typeof formSchema>>({
        resolver : zodResolver(formSchema),
        defaultValues : {
            name : ''
        }
    })

  return (
    <Modal
      title="Make your store"
      description="Add your store here!"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div className='space-y-4 py-2 pb-4'>
        <Form {...form}>
            <form>
                <FormField 
                    control={form.control}
                    name='name'
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Store Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='Enter your store name'
                                    {...field}
                                 />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <div className='pt-6 flex justify-end'>
                    <Button variant="destructive">Cancel</Button>
                </div>
            </form>
        </Form>
      </div>
    </Modal>
  );
};
