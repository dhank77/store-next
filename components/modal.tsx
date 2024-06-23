import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
  
interface ModalProps{
    title : string,
    description : string,
    isOpen : boolean,
    onClose : () => void,
    children? : React.ReactNode
}

const Modal = ({title, description, isOpen, onClose, children} : ModalProps) => {

    const onChange = (open : boolean) => {
        if(!open){
            onClose()
        }
    }

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
        <DialogTrigger></DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
            </DialogHeader>

            {children}
        </DialogContent>
    </Dialog>
  )
}

export default Modal