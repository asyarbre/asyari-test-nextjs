import * as React from 'react';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { handleCreateBook } from '@/services/books';
import { CreateBookTypes } from '@/services/types';

export default function AddBook() {
  const [isbn, setIsbn] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [subtitle, setSubtitle] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [publisher, setPublisher] = React.useState('');
  const [pages, setPages] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [website, setWebsite] = React.useState('');

  const date = new Date().toISOString().slice(0, 10);

  const onSubmit = async () => {
    const data: CreateBookTypes = {
      isbn,
      title,
      subtitle,
      author,
      published: date,
      publisher,
      pages: Number(pages),
      description,
      website,
    };
    if (
      !isbn ||
      !title ||
      !author ||
      !publisher ||
      !pages ||
      !description ||
      !website
    ) {
      toast.error('Please fill all the fields');
    } else {
      const response = await handleCreateBook(data);
      if (response.error === false) {
        toast.success('Book added successfully');
        window.location.reload();
      } else {
        toast.error(response.message);
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger className='my-4' asChild>
        <Button>Add Book</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add Book Data</DialogTitle>
          <DialogDescription>Click save when you're done.</DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='isbn' className='text-right'>
              ISBN
            </Label>
            <Input
              id='isbn'
              className='col-span-3'
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='title' className='text-right'>
              Title
            </Label>
            <Input
              id='title'
              className='col-span-3'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='subtitle' className='text-right'>
              Subtitle
            </Label>
            <Input
              id='subtitle'
              className='col-span-3'
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='author' className='text-right'>
              Author
            </Label>
            <Input
              id='author'
              className='col-span-3'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='publisher' className='text-right'>
              Publisher
            </Label>
            <Input
              id='publisher'
              className='col-span-3'
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='pages' className='text-right'>
              Pages
            </Label>
            <Input
              id='pages'
              className='col-span-3'
              type='number'
              value={pages}
              onChange={(e) => setPages(e.target.value)}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='description' className='text-right'>
              Description
            </Label>
            <Input
              id='description'
              className='col-span-3'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='website' className='text-right'>
              Website
            </Label>
            <Input
              id='website'
              className='col-span-3'
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit' onClick={onSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
