import { Checkbox } from '../ui/Checkbox/Checkbox'

type Props = {
    id: string
    label?: string
    onCheckedChange: (checked: boolean) => void
    checked: boolean
}

export function CheckboxWithText({ label, id, onCheckedChange, checked }: Props) {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id={id} onCheckedChange={onCheckedChange} checked={checked} />
            <label
                htmlFor={id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {label}
            </label>
        </div>
    )
}