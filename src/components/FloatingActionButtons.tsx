import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

const FloatingActionButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openEmail = () => {
    const subject = encodeURIComponent('Inquiry');
    const body = encodeURIComponent('Hello, I would like to know more about your services.');
    window.location.href = `mailto:marketingeatrepeatindia@gmail.com?subject=${subject}&body=${body}`;
    setIsDialogOpen(false);
  };

  return (
    <TooltipProvider>
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-2 sm:gap-3">
        {/* Email Button with alert dialog */}
        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <Tooltip>
            <AlertDialogTrigger asChild>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </Button>
              </TooltipTrigger>
            </AlertDialogTrigger>
            <TooltipContent side="left" className="hidden sm:block">
              <p>Contact Us</p>
            </TooltipContent>
          </Tooltip>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Only email is available for now</AlertDialogTitle>
              <AlertDialogDescription>
                Please reach out to us via email. Tap “Open Email” to compose a pre-filled message in your mail app.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
              <AlertDialogAction onClick={openEmail}>Open Email</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </TooltipProvider>
  );
};

export default FloatingActionButtons;
