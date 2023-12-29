import { Eye, PenSquare, Trash2 } from 'lucide-react';
import Link from 'next/link';
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

import { handleAllBooks } from '@/services/books';
import { GetAllBooksTypes } from '@/services/types';

import AddBook from './components/AddBook';

export default function Books() {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await handleAllBooks();
      if (response.error === false) {
        setBooks(response.data.data);
      }
    };
    fetchData();
  }, []);

  return (
    <main className='layout mb-20'>
      <AddBook />
      <Table>
        <TableCaption>A list of Books</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>ID</TableHead>
            <TableHead>User ID</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Published</TableHead>
            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books ? (
            books.map((book: GetAllBooksTypes) => (
              <TableRow key={book.id}>
                <TableCell className='font-medium'>{book.id}</TableCell>
                <TableCell>{book.user_id}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>
                  {new Date(book.published).toLocaleDateString()}
                </TableCell>
                <TableCell className='text-right'>
                  <Button
                    variant='outline'
                    size='icon'
                    className='mr-2'
                    asChild
                  >
                    <Link href={`/book/${book.id}`}>
                      <Eye className='h-[1.2rem] w-[1.2rem] text-blue-500' />
                    </Link>
                  </Button>
                  <Button variant='outline' size='icon' className='mr-2'>
                    <PenSquare className='h-[1.2rem] w-[1.2rem] text-green-500' />
                  </Button>
                  <Button variant='outline' size='icon'>
                    <Trash2 className='h-[1.2rem] w-[1.2rem] text-red-500' />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className='text-center' colSpan={11}>
                No Books Found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </main>
  );
}
