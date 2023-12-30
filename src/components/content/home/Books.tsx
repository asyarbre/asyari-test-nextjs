import { Eye, Trash2 } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { toast } from 'react-toastify';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { handleAllBooks, handleDeleteBook } from '@/services/books';
import { GetAllBooksTypes } from '@/services/types';

import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';

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

  const onDelete = async (id: number) => {
    const response = await handleDeleteBook(id);
    if (response.error === false) {
      toast.success(response.message);
      const newBooks = books.filter((book: GetAllBooksTypes) => book.id !== id);
      setBooks(newBooks);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <main className='layout mb-20'>
      <AddBook />
      <h1 className='text-xl font-bold mb-4'>Catalog Books</h1>
      <Table>
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
                <TableCell className='flex justify-end items-center text-right'>
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
                  <UpdateBook book={{ ...book }} />
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button variant='outline' size='icon'>
                        <Trash2 className='h-[1.2rem] w-[1.2rem] text-red-500' />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Delete Book {book.title}
                        </AlertDialogTitle>
                      </AlertDialogHeader>
                      <AlertDialogDescription>
                        Are you sure you want to delete this book?
                      </AlertDialogDescription>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => onDelete(book.id)}>
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
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
