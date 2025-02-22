const DetailItem = ({ icon, label, value }) => (
    <div className="flex items-start gap-3">
      <span className="text-xl mt-1 text-secondary">{icon}</span>
      <div>
        <p className="text-lg font-medium">{label}</p>
        <p className="text-lg">{value}</p>
      </div>
    </div>
  );

  export default DetailItem;