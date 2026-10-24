import { NextRequest, NextResponse } from 'next/server';
import { MOCK_RESEARCH_JOBS } from '@/lib/data';
import { ResearchJob } from '@/types';

export async function GET() {
  return NextResponse.json({
    jobs: MOCK_RESEARCH_JOBS,
    activeWorkers: 1,
    pipelineStatus: 'online'
  });
}

export async function POST(request: NextRequest) {
  try {
    const sessionToken = request.cookies.get('ben10_admin_session')?.value;
    if (!sessionToken) {
      return NextResponse.json({
        error: 'Unauthorized: Plumber Level 5 Command Clearance required to queue AI research jobs.'
      }, { status: 401 });
    }

    const body = await request.json();
    const { entityName, seriesSlug } = body;

    if (!entityName) {
      return NextResponse.json({ error: 'entityName is required' }, { status: 400 });
    }

    const newJob: ResearchJob = {
      id: `job-${Date.now()}`,
      entityName,
      seriesSlug: seriesSlug || 'ben-10-2005',
      status: 'queued',
      attempts: 0,
      factsFound: 0,
      imagesFound: 0,
      confidenceAverage: 0.0,
      startedAt: new Date().toISOString()
    };

    return NextResponse.json({
      message: `AI Research job queued for ${entityName}`,
      job: newJob
    }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
