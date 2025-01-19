import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

type CheckBoxProps = {
  className?: string;
  label?: string;
  checked?: boolean;
  hasError?: boolean;
  // eslint-disable-next-line no-unused-vars
  onCheckedChange?: (checked: string | boolean) => void;
};

const CheckBox = React.forwardRef<HTMLButtonElement, CheckBoxProps>(
  (
    { className, label, hasError = false, checked = false, onCheckedChange },
    ref
  ) => {
    return (
      <div className="flex w-full  justify-self-start items-center gap-2">
        <Checkbox.Root
          checked={checked}
          onCheckedChange={(state) => onCheckedChange?.(state)}
          ref={ref}
          className={cn(
            'peer h-4 w-4 shrink-0 rounded-sm border transition-colors focus-visible:ring-2 focus-visible:ring-primaryAccent500 focus-visible:ring-offset-2',
            hasError
              ? 'border-red'
              : checked
                ? 'border-primaryAccent500'
                : 'border-gray',
            className
          )}
        >
          <Checkbox.Indicator className="flex items-center justify-center rounded-sm bg-primaryAccent600">
            <Check className="h-4 w-4 text-white" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        {label && <label className="text-sm text-gray">{label}</label>}
      </div>
    );
  }
);

CheckBox.displayName = 'Checkbox';

export { CheckBox };
