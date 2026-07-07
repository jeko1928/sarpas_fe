export default function Dashboard(){

return(

<div>

<h1 className="text-3xl font-bold mb-8">
Dashboard
</h1>


<div className="grid grid-cols-1 md:grid-cols-3 gap-6">


<div className="bg-white rounded-xl shadow p-6">
<h2>Total Asset</h2>
<p className="text-3xl font-bold mt-3">
120
</p>
</div>


<div className="bg-white rounded-xl shadow p-6">
<h2>Proposal</h2>
<p className="text-3xl font-bold mt-3">
20
</p>
</div>


<div className="bg-white rounded-xl shadow p-6">
<h2>Permohonan</h2>
<p className="text-3xl font-bold mt-3">
10
</p>
</div>


</div>


</div>

)

}