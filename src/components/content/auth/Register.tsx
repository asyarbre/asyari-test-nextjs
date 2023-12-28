import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TabsContent } from '@/components/ui/tabs';

export default function Register() {
  return (
    <TabsContent value='register'>
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent className='space-y-2'>
          <div className='space-y-1'>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' type='text' />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' type='email' />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='password'>Password</Label>
            <Input id='password' type='password' />
          </div>
          <div className='space-y-1'>
            <Label htmlFor='password_confirmation'>Confirm Password</Label>
            <Input id='password_confirmation' type='password' />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Register</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}
