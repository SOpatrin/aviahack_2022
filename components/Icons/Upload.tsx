import { IconProps } from './icons.model';

const Upload: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM12.9116 4.86785C12.9116 4.3892 12.5236 4.00118 12.045 4.00118C11.5663 4.00118 11.1783 4.3892 11.1783 4.86785L11.1783 11.7136L8.56001 8.91999C8.24001 8.57333 7.69334 8.54666 7.33334 8.86666C7.14668 9.03999 7.05334 9.26666 7.05334 9.50666C7.05334 9.71999 7.12001 9.91999 7.28001 10.0933L11.3516 14.3733C11.7249 14.7867 12.3649 14.7867 12.7383 14.3733L16.72 10.0933C17.04 9.73333 17.0133 9.18666 16.6667 8.86666C16.3067 8.54666 15.76 8.55999 15.44 8.91999L12.9116 11.6497L12.9116 4.86785ZM5.8 18.2C5.8 17.7213 6.18802 17.3333 6.66667 17.3333H17.3333C17.812 17.3333 18.2 17.7213 18.2 18.2C18.2 18.6786 17.812 19.0667 17.3333 19.0667H6.66667C6.18802 19.0667 5.8 18.6786 5.8 18.2Z"
        fill="inherit"
      />
    </svg>
  );
};

export default Upload;
