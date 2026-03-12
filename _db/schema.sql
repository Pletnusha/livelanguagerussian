-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.profiles (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL UNIQUE,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  whatsapp_phone_number text,
  track_level text CHECK (track_level = ANY (ARRAY['principianti'::text, 'livello_elementare'::text, 'livello_di_base'::text])),
  courses ARRAY,
  marketing_consent boolean NOT NULL DEFAULT false,
  data_processing_consent boolean NOT NULL DEFAULT false,
  generated_password text,
  topic_pass text,
  plan text CHECK (plan = ANY (ARRAY['gruppo'::text, 'light'::text, 'base'::text])),
  login boolean NOT NULL DEFAULT false,
  lessonpaid boolean NOT NULL DEFAULT false,
  exercisepaid boolean NOT NULL DEFAULT false,
  registration_status text NOT NULL DEFAULT 'registered'::text CHECK (registration_status = ANY (ARRAY['registered'::text, 'paid'::text, 'cancelled'::text, 'expired'::text])),
  n8n_stage text NOT NULL DEFAULT 'new'::text CHECK (n8n_stage = ANY (ARRAY['new'::text, 'payment_confirmed'::text, 'email_sent'::text, 'error'::text])),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  last_login timestamp with time zone,
  webinar_registered boolean DEFAULT false,
  CONSTRAINT profiles_pkey PRIMARY KEY (id),
  CONSTRAINT profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
);
CREATE TABLE public.topics (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  topic_pass text NOT NULL UNIQUE,
  webinar_url text,
  course_discount_url text,
  sort_order integer DEFAULT 0,
  pdf_url text,
  CONSTRAINT topics_pkey PRIMARY KEY (id)
);
CREATE TABLE public.user_funnel (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid,
  stage text CHECK (stage = ANY (ARRAY['exercises_sent'::text, 'content_sent'::text, 'webinar_sent'::text, 'reminder_sent'::text])),
  stage_date timestamp with time zone,
  id_completed text,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT user_funnel_pkey PRIMARY KEY (id)
);
CREATE TABLE public.workshop_registrations (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  cognome text NOT NULL,
  email text NOT NULL,
  telefono text,
  professione text,
  track text NOT NULL,
  data_preferita date NOT NULL,
  categoria text NOT NULL CHECK (categoria = ANY (ARRAY['bni_mio'::text, 'bni_altro'::text, 'esterno'::text])),
  prezzo integer NOT NULL,
  commenti text,
  status text DEFAULT 'pending'::text,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT workshop_registrations_pkey PRIMARY KEY (id)
);