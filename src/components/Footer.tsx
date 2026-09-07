import { legal, restaurant } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-300 bg-bone-100 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs text-ink-700 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-display text-base font-bold text-ink-900">
            {restaurant.fullName}
          </span>
          <span>
            {restaurant.address.street}, {restaurant.address.postalCode}{" "}
            {restaurant.address.city}
          </span>
          <span>{restaurant.email}</span>
        </div>
        <div className="flex flex-col gap-1 sm:items-end">
          <span>{legal.note}</span>
          <span>
            © {new Date().getFullYear()} {restaurant.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
