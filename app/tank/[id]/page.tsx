import UpdateTank from "@/components/UpdateTank";

type Props = { params: { id: string } };

export default function page({ params }: Props) {
  return <UpdateTank id={params.id} />;
}
