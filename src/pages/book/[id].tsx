import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { handleDetailBook } from '@/services/books';
import { DetailBookTypes } from '@/services/types';

export default function BookDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [book, setBook] = React.useState<DetailBookTypes>();

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await handleDetailBook(id as string);
      if (response.error === false) {
        setBook(response.data);
      }
    };
    fetchData();
  }, [id]);

  return (
    <main className='layout mt-10'>
      <Button variant='secondary' asChild className='mb-5'>
        <Link href='/'>
          <ChevronLeft />
          <span>Back to Home</span>
        </Link>
      </Button>
      <Table>
        <TableCaption>Detail Book</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>ID</TableHead>
            <TableHead>User ID</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Subtitle</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Published</TableHead>
            <TableHead>Publisher</TableHead>
            <TableHead>Pages</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Website</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {book ? (
            <TableRow key={book.id}>
              <TableCell className='font-medium'>{book.id}</TableCell>
              <TableCell>{book.user_id}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.subtitle}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.published}</TableCell>
              <TableCell>{book.publisher}</TableCell>
              <TableCell>{book.pages}</TableCell>
              <TableCell>{book.description}</TableCell>
              <TableCell>{book.website}</TableCell>
            </TableRow>
          ) : (
            <TableRow>
              <TableCell colSpan={10} className='text-center'>
                No data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </main>
  );
}
