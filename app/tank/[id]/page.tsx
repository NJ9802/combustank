import UpdateTank from "@/components/UpdateTank";

type Props = { params: { id: string } };

export default function page({ params }: Props) {
  return (
    <section className="m-auto w-full flex-1">
      <UpdateTank id={params.id} />;
    </section>
  );
}
